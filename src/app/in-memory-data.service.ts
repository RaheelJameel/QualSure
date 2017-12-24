import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const degrees = [
       {id: 1,
        firstName: 'Alpha',
        lastName: 'Bravo',
        degreeType: 'BS',
        field: 'CS',
        gradYear: 2018,
        gpa: 3.5,
        fatherFirstName: 'Charlie',
        fatherLastName: 'Khan'
      },
      {id: 2,
        firstName: 'Sajeer',
        lastName: 'Khan',
        degreeType: 'BS',
        field: 'EE',
        gradYear: 2019,
        gpa: 2.35,
        fatherFirstName: 'Saif',
        fatherLastName: 'Khan'
      },
      {id: 3,
        firstName: 'Usman',
        lastName: 'Jameel',
        degreeType: 'MS',
        field: 'ME',
        gradYear: 2021,
        gpa: 3.35,
        fatherFirstName: 'Gardezi',
        fatherLastName: 'Shafiq'
      }
    ];
    return {degrees};
  }
}
