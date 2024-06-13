import { Injectable } from '@angular/core';

@Injectable()
export class JobService {
  jobs: any;
  constructor() {}

  getJobs() {
    return (this.jobs = [
      {
        title: 'Software Developer',
        type: 'Full-time',
        company: 'Acme Technologies',
        location: 'Remote (US)',
        description:
          'Design, develop, and maintain high-quality web applications using cutting-edge technologies.',

        id: 1,
      },
      {
        title: 'Marketing Manager',
        type: 'Full-time',
        company: 'GreenGrowth Inc.',
        location: 'Toronto, Canada',
        description:
          'Lead and develop marketing strategies to increase brand awareness and drive sales.',

        id: 2,
      },
      {
        title: 'Graphic Designer',
        type: 'Full-time',
        company: 'Creative Canvas',
        location: 'London, UK',
        description:
          'Create visually appealing graphics for marketing materials, websites, and social media.',

        id: 3,
      },
      {
        title: 'Data Analyst',
        type: 'Part-time',
        company: 'Insights Inc.',
        location: 'Chicago, IL',
        description:
          'Analyze and interpret data to gain insights and inform business decisions.',

        id: 4,
      },
      {
        title: 'Accountant',
        type: 'Full-time',
        company: 'Financial Focus',
        location: 'Sydney, Australia',
        description:
          'Manage financial records, prepare reports, and ensure compliance with regulations.',

        id: 5,
      },
      {
        title: 'Project Manager',
        type: 'Part-time',
        company: 'Build Right',
        location: 'Berlin, Germany',
        description:
          'Plan, lead, and execute projects to ensure successful completion within budget and timeline.',

        id: 6,
      },
      {
        title: 'Content Writer',
        type: 'Freelance',
        company: 'Various (contract positions)',
        location: 'Remote (flexible)',
        description:
          'Create engaging and informative content for websites, blogs, and marketing materials.',

        id: 7,
      },
    ]);
  }
  getJobById(id: any) {
    if (this.jobs) return this.jobs.find((job: any) => job.id === id);

    return {
      title: 'Software Developer',
      type: 'Full-time',
      company: 'Acme Technologies',
      location: 'Remote (US)',
      description:
        'Design, develop, and maintain high-quality web applications using cutting-edge technologies.',

      id: 1,
    };
  }
}
