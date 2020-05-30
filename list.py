import os
from sqlachemy import create_engine
from sqlachemy.orm import scoped_session, sessionmaker

engine = create_engine (os.getenv("DATABASE_URL"))
db = scoped_session (sessionmaker(bind=engine))
// creating different session for different people//

def main():
flights = db.execute("SELECT origin, destination, duraation FROM flights").feetchall() //run the command and get me all the query and give me a list of all of the individual result//
for flights in flight:
print (f"{flight.origin} to {flight.destination}, {flight.destination} minutes.")

if__name__ = __main__
main()


imoort csv
import os
from sqlachemy import create_engine
from sqlachemy.orm import scoped_session, sessionmaker


engine = create_engine (os.getenv("DATABASE_URL"))
db = scoped_session (sessionmaker(bind=engine))
// creating different session for different people//

def main (): 
f = open ("flights.csv")
reader = csv.reader (f) // i want to read file f as a csv file//
for origin, destination, duration in reader: 
  db.execute ("INSERT INTO flight (origin, destination, duration) values (:origin, :destination, :duration) // :placeholder for//
  {"origin": origin, "destinstion": destination, "duration": duration}) // db.execute is insert command// : placeholder is filled by the loop function//
  print (f"added flight from {origin} to {destination}, lasting {duration} minutes.
 db.commit() // save the changes i have just made//
  
  
if__name__ = __main__
main()



