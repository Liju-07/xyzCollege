import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  constructor() { }




  data:any=[
    {'Name':'Raju','RollNo':'1','AdmissionNo':'1001','Department':'Computer','College':'ABC','DOB':'22-12-2010','Address':'Pulikkal(h)','ParentName':'Vinod','Mobile':'997845985','Blood':'O+'},
    {'Name':'Manu','RollNo':'2','AdmissionNo':'1002','Department':'Chemical Engineering','College':'CDE','DOB':'23-06-2008','Address':'Thekkel(h)','ParentName':'Manoj','Mobile':'947845985','Blood':'A+'},
    {'Name':'Biju','RollNo':'3','AdmissionNo':'1003','Department':'Civil Engineering','College':'WER','DOB':'10-05-2009','Address':'Vazhayl(h)','ParentName':'Subhash','Mobile':'9047845985','Blood':'O+'},
    {'Name':'Chinju','RollNo':'10','AdmissionNo':'1011','Department':'Computer','College':'SDF','DOB':'22-09-2012','Address':'Valliyaveettil(h)','ParentName':'Krishnan','Mobile':'977845985','Blood':'B+'},
    {'Name':'Lino','RollNo':'11','AdmissionNo':'1041','Department':'Civil Engineering','College':'ASD','DOB':'27-12-2011','Address':'Kalarikkal(h)','ParentName':'Joy','Mobile':'887845985','Blood':'O+'},
    {'Name':'Aravind','RollNo':'4','AdmissionNo':'1004','Department':'Electrical Engineering','College':'QWER','DOB':'31-03-2010','Address':'Kalarikkal(h)','ParentName':'Salby','Mobile':'9347845985','Blood':'B+'},
    {'Name':'Amal','RollNo':'5','AdmissionNo':'1005','Department':'Environmental Science','College':'ZXC','DOB':'30-01-2012','Address':'Malayl(h)','ParentName':'Joy','Mobile':'928845985','Blood':'O+'},
    {'Name':'Suresh','RollNo':'6','AdmissionNo':'1006','Department':'Mechanical Engineering','College':'TYU','DOB':'16-09-2011','Address':'Mannarath(h)','ParentName':'Krishnan','Mobile':'9147845985','Blood':'B-'},
    {'Name':'Malavika','RollNo':'7','AdmissionNo':'1007','Department':'Forensic Chemistry','College':'FGH','DOB':'10-06-2009','Address':'Kozhykkunnel(h)','ParentName':'Mohanan','Mobile':'9547845985','Blood':'O-'},
    {'Name':'Suresh','RollNo':'8','AdmissionNo':'1008','Department':'Computer','College':'YUI','DOB':'10-12-2010','Address':'Ellayanjil(h)','ParentName':'Vinod','Mobile':'547845985','Blood':'AB-'},
    {'Name':'Akhil','RollNo':'9','AdmissionNo':'1009','Department':'Chemical Engineering','College':'POIJ','DOB':'23-08-2010','Address':'Muryl(h)','ParentName':'Vinod','Mobile':'9647845985','Blood':'AB-'},
    {'Name':'Chinju','RollNo':'10','AdmissionNo':'1011','Department':'Computer','College':'SDF','DOB':'22-09-2012','Address':'Valliyaveettil(h)','ParentName':'Krishnan','Mobile':'977845985','Blood':'B+'},
    {'Name':'Lino','RollNo':'11','AdmissionNo':'1041','Department':'Civil Engineering','College':'ASD','DOB':'27-12-2011','Address':'Kalarikkal(h)','ParentName':'Joy','Mobile':'887845985','Blood':'O+'},
    {'Name':'Raju','RollNo':'1','AdmissionNo':'1001','Department':'Computer','College':'ABC','DOB':'22-12-2010','Address':'Pulikkal(h)','ParentName':'Vinod','Mobile':'997845985','Blood':'O+'},
    {'Name':'Manu','RollNo':'2','AdmissionNo':'1002','Department':'Chemical Engineering','College':'CDE','DOB':'23-06-2008','Address':'Thekkel(h)','ParentName':'Manoj','Mobile':'947845985','Blood':'A+'},
    {'Name':'Ranju','RollNo':'12','AdmissionNo':'1051','Department':'Forensic Chemistry','College':'QWE','DOB':'11-02-2010','Address':'Pulikkal(h)','ParentName':'Mohanan','Mobile':'847845985','Blood':'A-'},
    {'Name':'Chinju','RollNo':'10','AdmissionNo':'1011','Department':'Computer','College':'SDF','DOB':'22-09-2012','Address':'Valliyaveettil(h)','ParentName':'Krishnan','Mobile':'977845985','Blood':'B+'},
    {'Name':'Lino','RollNo':'11','AdmissionNo':'1041','Department':'Civil Engineering','College':'ASD','DOB':'27-12-2011','Address':'Kalarikkal(h)','ParentName':'Joy','Mobile':'887845985','Blood':'O+'},
    {'Name':'Aravind','RollNo':'4','AdmissionNo':'1004','Department':'Electrical Engineering','College':'QWER','DOB':'31-03-2010','Address':'Kalarikkal(h)','ParentName':'Salby','Mobile':'9347845985','Blood':'B+'},
    {'Name':'Amal','RollNo':'5','AdmissionNo':'1005','Department':'Environmental Science','College':'ZXC','DOB':'30-01-2012','Address':'Malayl(h)','ParentName':'Joy','Mobile':'928845985','Blood':'O+'},
    {'Name':'Suresh','RollNo':'6','AdmissionNo':'1006','Department':'Mechanical Engineering','College':'TYU','DOB':'16-09-2011','Address':'Mannarath(h)','ParentName':'Krishnan','Mobile':'9147845985','Blood':'B-'},
    {'Name':'Malavika','RollNo':'7','AdmissionNo':'1007','Department':'Forensic Chemistry','College':'FGH','DOB':'10-06-2009','Address':'Kozhykkunnel(h)','ParentName':'Mohanan','Mobile':'9547845985','Blood':'O-'},
    {'Name':'Suresh','RollNo':'8','AdmissionNo':'1008','Department':'Computer','College':'YUI','DOB':'10-12-2010','Address':'Ellayanjil(h)','ParentName':'Vinod','Mobile':'547845985','Blood':'AB-'},
    {'Name':'Akhil','RollNo':'9','AdmissionNo':'1009','Department':'Chemical Engineering','College':'POIJ','DOB':'23-08-2010','Address':'Muryl(h)','ParentName':'Vinod','Mobile':'9647845985','Blood':'AB-'},
    {'Name':'Manju','RollNo':'13','AdmissionNo':'1061','Department':'Electrical Engineering','College':'JHG','DOB':'10-01-2009','Address':'Thekkel(h)','ParentName':'Salby','Mobile':'877845985','Blood':'AB+'}
  ]



  ngOnInit(): void {
  }

}
