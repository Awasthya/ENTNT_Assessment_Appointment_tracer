
# ENTNT Assesment Project

This Project Is an Assesment Given by ENTNT on Appointment Tracker. which is used for tracking appointment's. It is full stack project which used MongoDb for storing Appointment. and accesses that using REST api's.

Technologies Used
### Frontend:
 React.js, HTML, CSS
### Backend:
 Node.js

The project is divided into four main sections:.
## Home Page 
The home page incorporates three key features:

![image](https://github.com/Awasthya/ENTNT_Assessment_Appointment_tracer/assets/92320605/fbbfc80f-d917-4275-befb-1d660186b4ad)


#### Adding New Client Section 
 
To add a new client, click the button in the upper-left corner. A popup will appear, allowing you to fill in the client details and create a new entry.

![Screenshot 2023-12-10 230022](https://github.com/Awasthya/ENTNT_Assessment_Appointment_tracer/assets/92320605/b8445565-0890-473a-b56b-db3bdaf4d726)

### Latest Appointment Section

The right-side section displays today's appointments, fetching data directly from MongoDB.

![Screenshot 2023-12-10 230123](https://github.com/Awasthya/ENTNT_Assessment_Appointment_tracer/assets/92320605/0a1df721-f47a-478e-b944-2e2b54aebe88)

### Calender Section 

The left side of the home page seamlessly integrates with a calendar.This section features a calendar that visually represents all appointments. Reserved dates are highlighted in red. Clicking on a reserved date reveals a page displaying all appointments scheduled for that day.


![Screenshot 2023-12-10 230218](https://github.com/Awasthya/ENTNT_Assessment_Appointment_tracer/assets/92320605/ea94a4fa-1ef6-47a7-8a5b-c713dd7d8f98)


## Appointment Section 

Accessible from the navbar, this section displays all clients with upcoming appointments. I also fetch data from MongoDb using rest API. 


![image](https://github.com/Awasthya/ENTNT_Assessment_Appointment_tracer/assets/92320605/3ee63ced-a8a5-43fc-84f8-1272da4431f8)
## Client Section 

Clicking on an any appointmentwithin project will redirects you to the client section, revealing the associated client profile and all related appointments.

 

![image](https://github.com/Awasthya/ENTNT_Assessment_Appointment_tracer/assets/92320605/19cd0879-fd25-4edd-801a-7c6ef5bb0c62)


## CURD operation in Appointment's

all the appointment in this project is editable. you can edit as well as delete appointment's by clicking on edit and delete icon on appointment. 

### Edit client detail 
![image](https://github.com/Awasthya/ENTNT_Assessment_Appointment_tracer/assets/92320605/186e4c0a-4093-42da-81dd-3ccc94dee19d) 

### on deleting it will confirm once by popup

![image](https://github.com/Awasthya/ENTNT_Assessment_Appointment_tracer/assets/92320605/3cdde1c8-a392-40ea-b67d-153b891661ea) 

### Aoppintment Edit

After traversing client profile you also can edit appointment's. all can add appointment from client section only. 
![image](https://github.com/Awasthya/ENTNT_Assessment_Appointment_tracer/assets/92320605/8ccd2bde-1956-47ca-a15f-96a039c7b7e3)
# how to install it 

1. Download zip file from upper-right corner.
2. Unzip that folder
3. Run npm commond for install dependencies in both Frontend and backend folder.
## Deployment
To deploy this project run

```bash
  npm install
```
 then use npm start || yarn start comman for run project

```bash
  npm start
```

paste you MongoDb database URI on on config.env file and then you are reasdy to go I will automatically create all the require schema's. into you database.

I completed this project in less than 72 hours. 

### Feature can we implemented if given more time 

1. for better utilaization of project we can implement login/ and register feature's as well so that diffrent user can use that to track appointments.

2. Also can create profile picture on each client.

Feel free to explore and enjoy the Appointment Tracker!




