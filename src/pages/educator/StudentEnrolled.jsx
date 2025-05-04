import React, { useState } from 'react';
import { assets } from '../../assets/assets';

const StudentEnrolled = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      avatar: assets.profile_img_1,
      enrolledCourses: [
        { id: 101, title: 'Introduction to React', date: '2023-05-15', progress: 75 },
        { id: 102, title: 'JavaScript Fundamentals', date: '2023-06-20', progress: 100 }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      avatar: assets.profile_img_2,
      enrolledCourses: [
        { id: 101, title: 'Introduction to React', date: '2023-07-10', progress: 30 }
      ]
    },
    {
      id: 3,
      name: 'Alex Johnson',
      email: 'alex@example.com',
      avatar: assets.profile_img_3,
      enrolledCourses: [
        { id: 103, title: 'Node.js Basics', date: '2023-08-05', progress: 50 },
        { id: 104, title: 'Advanced CSS', date: '2023-08-12', progress: 10 }
      ]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Filter and sort students
  const filteredStudents = students
    .filter(student => {
      const searchLower = searchTerm.toLowerCase();
      return (
        student.name.toLowerCase().includes(searchLower) ||
        student.email.toLowerCase().includes(searchLower) ||
        student.enrolledCourses.some(course => 
          course.title.toLowerCase().includes(searchLower)
      ))
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'date') {
        const aLatest = Math.max(...a.enrolledCourses.map(c => new Date(c.date)));
        const bLatest = Math.max(...b.enrolledCourses.map(c => new Date(c.date)));
        return bLatest - aLatest;
      }
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="p-4 lg:ml-10 pt-20 w-full max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
        {/* Header and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Students Enrolled</h1>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={assets.search_icon} alt="Search" className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search students or courses..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full text-sm md:text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base"
            >
              <option value="name">Sort by Name</option>
              <option value="date">Sort by Recent</option>
            </select>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
            <div className="flex items-center">
              <img src={assets.patients_icon} alt="Students" className="w-5 h-5 md:w-6 md:h-6 mr-2" />
              <span className="text-sm md:text-base text-gray-600">Total Students</span>
            </div>
            <div className="text-xl md:text-2xl font-bold mt-1">{students.length}</div>
          </div>
          
          <div className="bg-green-50 p-3 md:p-4 rounded-lg">
            <div className="flex items-center">
              <img src={assets.my_course_icon} alt="Courses" className="w-5 h-5 md:w-6 md:h-6 mr-2" />
              <span className="text-sm md:text-base text-gray-600">Total Enrollments</span>
            </div>
            <div className="text-xl md:text-2xl font-bold mt-1">
              {students.reduce((sum, student) => sum + student.enrolledCourses.length, 0)}
            </div>
          </div>
          
          <div className="bg-purple-50 p-3 md:p-4 rounded-lg">
            <div className="flex items-center">
              <img src={assets.person_tick_icon} alt="Completed" className="w-5 h-5 md:w-6 md:h-6 mr-2" />
              <span className="text-sm md:text-base text-gray-600">Avg. Completion</span>
            </div>
            <div className="text-xl md:text-2xl font-bold mt-1">
              {Math.round(
                students.reduce((sum, student) => {
                  const studentAvg = student.enrolledCourses.reduce((s, c) => s + c.progress, 0) / 
                                   student.enrolledCourses.length || 0;
                  return sum + studentAvg;
                }, 0) / students.length || 0
              )}%
            </div>
          </div>
        </div>

        {/* Students Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th scope="col" className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th scope="col" className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Enrolled
                </th>
                <th scope="col" className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <React.Fragment key={student.id}>
                    {student.enrolledCourses.map((course, index) => (
                      <tr key={`${student.id}-${course.id}`} className={index === 0 ? '' : 'bg-gray-50'}>
                        {index === 0 ? (
                          <td
                            rowSpan={student.enrolledCourses.length}
                            className="px-3 py-3 md:px-6 md:py-4 whitespace-nowrap border-r border-gray-200"
                          >
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-8 w-8 md:h-10 md:w-10">
                                <img className="h-8 w-8 md:h-10 md:w-10 rounded-full" src={student.avatar} alt={student.name} />
                              </div>
                              <div className="ml-2 md:ml-4">
                                <div className="text-sm font-medium text-gray-900 line-clamp-1">{student.name}</div>
                                <div className="text-xs text-gray-500 line-clamp-1">{student.email}</div>
                              </div>
                            </div>
                          </td>
                        ) : null}
                        <td className="px-3 py-3 md:px-6 md:py-4">
                          <div className="text-sm text-gray-900 line-clamp-1">{course.title}</div>
                          <div className="text-xs text-gray-500 sm:hidden">
                            Enrolled: {new Date(course.date).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-3 py-3 md:px-6 md:py-4 whitespace-nowrap hidden sm:table-cell">
                          <div className="text-sm text-gray-500">
                            {new Date(course.date).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-3 py-3 md:px-6 md:py-4">
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2 md:h-2.5 mr-2">
                              <div
                                className="bg-blue-600 h-2 md:h-2.5 rounded-full"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-xs md:text-sm text-gray-500">{course.progress}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                    No students found matching your search
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentEnrolled;