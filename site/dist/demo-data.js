// Fictional examples for local demonstrations, not real students or trips.
export const initialData = {
  currentStudentId: 'student-1',
  students: [
    { id: 'student-1', displayName: 'Alex Morgan', hostCity: 'Barcelona', program: 'Semester abroad', interests: ['Food', 'Weekend trips'] },
    { id: 'student-2', displayName: 'Sam Rivera', hostCity: 'Barcelona', program: 'Exchange program', interests: ['Hiking', 'Photography'] },
    { id: 'student-3', displayName: 'Jordan Chen', hostCity: 'Barcelona', program: 'Study abroad', interests: ['Art', 'Food'] },
  ],
  trips: [
    { id: 'trip-1', title: 'A weekend in Valencia', destination: 'Valencia', startDate: '2027-02-19', endDate: '2027-02-21', budgetAmount: 150, currency: 'EUR', description: 'A relaxed weekend for food, art and exploring the city.', creatorId: 'student-2', participantIds: ['student-2', 'student-3'] },
    { id: 'trip-2', title: 'Coastal day trip', destination: 'Sitges', startDate: '2027-03-06', endDate: '2027-03-06', budgetAmount: 45, currency: 'EUR', description: 'A low-key day by the sea, with room for new friends.', creatorId: 'student-3', participantIds: ['student-3'] },
  ],
  recommendations: [{ id: 'tip-1', destination: 'Valencia', text: 'Sample idea: explore the old town on foot.', authorId: 'student-2', sourceLabel: 'Fictional demo tip' }],
};
