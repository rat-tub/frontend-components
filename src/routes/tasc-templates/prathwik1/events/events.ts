export interface Event {
  id: number;
  title: string;
  image?: string;
  imageAlt?: string;
  date: Date;
  time?: string;
  venue?: string;
  organizers?: string;
  description: string;
  guests?: string;
  winners?: string;
  reportLink?: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: 'Freshers Induction Program 2022',
    date: new Date('2022-11-10'),
    time: '12 pm - 1 pm',
    venue: 'Shambhavi (Formal) | Sambhram (Informal)',
    organizers: '5th sem AIML students',
    description: 'Freshers day is a day where seniors and juniors finally bond and unite to celebrate being part of the college. Students of Second Year (batch:2021-25), Department of AIML, were welcomed to this party, which was organised by senior students of Third Year in Shambhavi Hall at 12 PM.',
    reportLink: 'https://drive.google.com/file/d/1DUTfywPhTt9-0HCigmD1hTsSpAZxJnkI/view',
  },
  {
    id: 2,
    title: 'Industrial Visit',
    date: new Date('2022-11-17'),
    organizers: '5th sem AIML students',
    description: 'The student committee of the Department of AIML organised a 3-day industrial visit to Kochi for the students of Vth sem. Maker Village was one of the industries that we had visited. Faculties from the department of AIML, Mr. Mahesh B.L. and Ms. Nisha accompanied the students for the visit.',
    reportLink: 'https://drive.google.com/file/d/1sdWRVoY0cx1RgU6Md_v9jt2RXyzvHcGl/view',
  },
  {
    id: 3,
    title: 'Flush the Brush',
    date: new Date('2022-12-17'),
    time: '11 am  - 12:30 pm',
    guests: 'Mr. Sathish Nayak - Digital Media Co-Ordinator, Nitte University, Mr. Santhosh S - Asst. Professor Gd. II - Department of ISE, Mrs. Preethi Salian K - Asst. Professor Gd. II - Department of ISE',
    organizers: 'Sambhram Shetty, Anagha N',
    winners: 'Vaishali V Kattimani, Swati Rathod, Akash V Bhat, Ganesh Nayak',
    description: "On December 17 2022, FLUSH THE BRUSH, a brushless painting compitition event was conducted by the TASC studentcommittee in order to encourage students to develop the ability to see from someone else's perspective.",
    reportLink: 'https://drive.google.com/file/d/15SXgxucRnedu-kXlwtKx8Tx8BAxbdK5m/view',
  },
  {
    id: 4,
    title: 'IoT Workshop',
    date: new Date('2022-12-17'),
    time: '11 am  - 12:30 pm',
    organizers: 'TASC',
    guests: 'Mr. Arun R Founder of DLithe, Co-Founder NXTALIGN Innovation',
    description: 'On February 22nd 2023, IOT WORKSHOP event was conducted by the TASC student committee collaborating with Dlithe company in order to encourage students to develop Understanding the robotics future and scope Understanding the different microcontroller available in the industry & their use, enhanced the basics of IOT using INTEL GALILEO GEN2.',
    reportLink: 'https://drive.google.com/file/d/1d57fKsd41adSmn4Pyl8_Dy8dp3KmeeXu/view',
  },
  {
    id: 5,
    title: 'Algorithm Arena',
    date: new Date('2023-2-22'),
    time: '11 am  - 12:30 pm',
    winners: 'Shreyas Saunshi',
    organizers: 'Parth Gupta, Rifaath Ameen',
    description: 'The TASC Algorithm Arena event was organised by Parth and Rifaath and was held on HackerRank, an online platform for competitive programming. The event was held on 18th Feb 2023 from 6-8 pm and was open to all programming enthusiasts who were interested in showcasing their algorithmic problem-solving skills.',
    reportLink: 'https://drive.google.com/file/d/1XQY90qFDJpw9lXmk6KY6K4zCeMvkElvt/view',
  },
  {
    id: 6,
    title: 'Code Rescue',
    date: new Date('2023-3-25'),
    time: '11 am  - 12:30 pm',
    organizers: 'Parth Gupta, Nishanth N',
    winners: 'Jaideep Yogish',
    description: 'The TASC Algorithm Arena event was organised by Parth and Nishanth and was held on OneCompiler , an online platform for competitive programming. The event was held on 25th Mar 2023 from 7:30-8:30 pm and was open to all programming enthusiasts who were interested in showcasing their debugging skills.',
    reportLink: 'https://drive.google.com/file/d/1K19mc4dvFCc8EMM1SdICR8Jc9QmTsa-1/view',
  },
  {
    id: 7,
    title: 'Shuttle Smash',
    date: new Date('2023-3-30'),
    time: '4:30 pm  - 6:30 pm',
    organizers: 'Apeksha Shetty, Ajay Braggs',
    winners: 'Shreesha Shetty, N Gaurav Ajila',
    description: 'On March 30th 2023, SHUTTLE SMASH event was conducted by the TASC student committee in order to improve a physical, mental, and social benefits, making it an excellent sport for anyone looking to improve their health and wellbeing. The event was conducted at Sadananda Auditorium from 4:30pm to 6:30pm and 22 teams participated in the event.',
    reportLink: 'https://drive.google.com/file/d/1Te4DRwdwhF5wC0RUxlprBH2Z0H6nwtDO/view',
  },
  {
    id: 8,
    title: 'Seeing and Understanding: A Machine Perspective',
    date: new Date('2023-4-1'),
    time: '9 am - 1 pm',
    venue: 'Sowparnika Hall',
    organizers: 'TASC & ELECSA (Dept of ECE)',
    guests: 'Dr. Narendra K C, Lecturer, Department of Electronics and Communication',
    description: 'On April 1st, 2023, “Seeing and perceiving: A machine learning perspective event” was conducted by the TASC student committee collaborating with ELECSA, department of Electronics and Communication covered diverse concepts related to image perception and deep learning using neural networks. Participants explored how machines perceive images, including understanding the role of visual perception in computer vision tasks.',
    reportLink: 'https://drive.google.com/file/d/1Qv8uFuWM-Dp3zCne5Js-EZsoHq9AX9Ak/view',
  },
  {
    id: 9,
    title: 'Mixology',
    date: new Date('2023-4-13'),
    time: '3:30 pm - 4:30 pm',
    organizers: 'Sambhram Shetty',
    winners: 'Sinchana, Bhuvan, Srinarayan Bhat',
    description: 'Mixology is a mocktail making contest for students. The purpose of the event was to provide an opportunity for students to showcase their creativity, teamwork, and time management skills by preparing mocktails in under 20 minutes.',
    reportLink: 'https://drive.google.com/file/d/13Uvvli9hfds6f6eBmztWNWBMUn5c5Q32/view',
  },
];
