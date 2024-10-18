import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-record-details',
  standalone: true,
  imports: [],
  templateUrl: './medical-record-details.component.html',
  styleUrls: ['./medical-record-details.component.css'],
})
export class MedicalRecordDetailsComponent implements OnInit {
  date: string | undefined;
  details: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.date = params['date'];
      this.details = params['details'];
    });
  }
}