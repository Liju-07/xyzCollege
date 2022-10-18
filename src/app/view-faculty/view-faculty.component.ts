import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-faculty',
  templateUrl: './view-faculty.component.html',
  styleUrls: ['./view-faculty.component.css']
})
export class ViewFacultyComponent implements OnInit {

  constructor() { }



data:any=[
  {'Name':'Raju','Designation':'Ass.Professor','Educational':'MCA','Department':'Computer','DOB':'12-12-1980','DOJ':'22-12-2010','Address':'Pulikkal(h)','Mobile':'997845985',},
  {'Name':'Manu','Designation':'Professor','Educational':'M.Tech','Department':'Chemical Engineering','DOB':'10-11-1980','DOJ':'23-06-2008','Address':'Thekkel(h)','Mobile':'947845985',},
  {'Name':'Biju','Designation':'Professor','Educational':'MCA','Department':'Civil Engineering','DOB':'03-10-1980','DOJ':'10-05-2009','Address':'Vazhayl(h)','Mobile':'9047845985',},
  {'Name':'Aravind','Designation':'Ass.Professor','Educational':'M.Tech','Department':'Electrical Engineering','DOB':'06-06-1980','DOJ':'31-03-2010','Address':'Kalarikkal(h)','Mobile':'9347845985',},
  {'Name':'Amal','Designation':'Professor','Educational':'M.com','Department':'Environmental Science','DOB':'05-10-1980','DOJ':'30-01-2012','Address':'Malayl(h)','Mobile':'928845985',},
  {'Name':'Suresh','Designation':'Professor','Educational':'MCA','Department':'Mechanical Engineering','DOB':'10-08-1980','DOJ':'16-09-2011','Address':'Mannarath(h)','Mobile':'9147845985',},
  {'Name':'Malavika','Designation':'Ass.Professor','Educational':'M.Tech','Department':'Forensic Chemistry','DOB':'14-03-1980','DOJ':'10-06-2009','Address':'Kozhykkunnel(h)','Mobile':'9547845985',},
  {'Name':'Suresh','Designation':'Professor','Educational':'MBA','Department':'Computer','DOB':'10-07-1980','DOJ':'10-12-2010','Address':'Ellayanjil(h)','Mobile':'547845985',},
  {'Name':'Akhil','Designation':'Professor','Educational':'M.com','Department':'Chemical Engineering','DOB':'10-04-1980','DOJ':'23-08-2010','Address':'Muryl(h)','Mobile':'9647845985',},
  {'Name':'Chinju','Designation':'Ass.Professor','Educational':'M.Tech','Department':'Computer','DOB':'10-10-1980','DOJ':'22-09-2012','Address':'Valliyaveettil(h)','Mobile':'977845985',},
  {'Name':'Lino','Designation':'Professor','Educational':'MCA','Department':'Civil Engineering','DOB':'11-09-1980','DOJ':'27-12-2011','Address':'Kalarikkal(h)','Mobile':'887845985',},
  {'Name':'Ranju','Designation':'Ass.Professor','Educational':'M.com','Department':'Forensic Chemistry','DOB':'12-03-1980','DOJ':'11-02-2010','Address':'Pulikkal(h)','Mobile':'847845985',},
  {'Name':'Manju','Designation':'Professor','Educational':'MBA','Department':'Electrical Engineering','DOB':'03-10-1980','DOJ':'10-01-2009','Address':'Thekkel(h)','Mobile':'877845985',}
]


  ngOnInit(): void {
  }

}
