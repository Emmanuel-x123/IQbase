import React from 'react'
import { assets } from '../../assets/assets'

const Dashboard = () => {
  // Sample data - replace with your actual data
  const stats = {
    totalEnrollments: 1245,
    totalCourses: 18,
    totalEarnings: 28640,
  }

  const latestEnrollments = [
    { id: 1, student: 'Alex Johnson', course: 'Advanced React', date: '2023-06-15', amount: 129 },
    { id: 2, student: 'Sarah Williams', course: 'Python for Beginners', date: '2023-06-14', amount: 89 },
    { id: 3, student: 'Michael Chen', course: 'UI/UX Fundamentals', date: '2023-06-13', amount: 99 },
    { id: 4, student: 'Emily Rodriguez', course: 'Data Science 101', date: '2023-06-12', amount: 149 },
    { id: 5, student: 'David Kim', course: 'Advanced React', date: '2023-06-11', amount: 129 },
  ]

  return (
    <div className="p-6 pt-20 w-full max-w-7xl">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Enrollments */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className=" rounded-full bg-blue-100 mr-4">
              <img src={assets.patients_icon} alt="Enrollments" className="w-10 h-10" />
            </div>
            <div>
              <p className="text-gray-500">Total Enrollments</p>
              <h3 className="text-2xl font-bold">{stats.totalEnrollments.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        {/* Total Courses */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full mr-4">
              <img src={assets.appointments_icon} alt="Courses" className="w-10 h-10" />
            </div>
            <div>
              <p className="text-gray-500">Total Courses</p>
              <h3 className="text-2xl font-bold">{stats.totalCourses}</h3>
            </div>
          </div>
        </div>

        {/* Total Earnings */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full mr-4">
              <img src={assets.earning_icon} alt="Earnings" className="w-10 h-10" />
            </div>
            <div>
              <p className="text-gray-500">Total Earnings</p>
              <h3 className="text-2xl font-bold">${stats.totalEarnings.toLocaleString()}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Enrollments */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Latest Enrollments</h2>
          {/* <button className="text-blue-600 hover:text-blue-800">View All</button> */}
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {latestEnrollments.map((enrollment) => (
                <tr key={enrollment.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-600">
                          {enrollment.student.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{enrollment.student}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enrollment.course}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(enrollment.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${enrollment.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard