import React, { useState } from 'react';
import { assets } from '../../assets/assets';

const MyCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Introduction to React',
      thumbnail: assets.course_1_thumbnail,
      price: 49.99,
      students: 125,
      earnings: 6248.75,
      published: true,
      lastUpdated: '2023-05-15'
    },
    {
      id: 2,
      title: 'Advanced JavaScript Patterns',
      thumbnail: assets.course_2_thumbnail,
      price: 59.99,
      students: 87,
      earnings: 5219.13,
      published: true,
      lastUpdated: '2023-06-22'
    },
    {
      id: 3,
      title: 'Node.js Fundamentals',
      thumbnail: assets.course_3_thumbnail,
      price: 39.99,
      students: 0,
      earnings: 0,
      published: false,
      lastUpdated: '2023-07-10'
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('lastUpdated');

  // Calculate totals
  const totalCourses = courses.length;
  const totalStudents = courses.reduce((sum, course) => sum + course.students, 0);
  const totalEarnings = courses.reduce((sum, course) => sum + course.earnings, 0);

  // Filter and sort courses
  const filteredCourses = courses
    .filter(course => {
      if (filter === 'all') return true;
      if (filter === 'published') return course.published;
      if (filter === 'draft') return !course.published;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'students') return b.students - a.students;
      if (sortBy === 'earnings') return b.earnings - a.earnings;
      return new Date(b.lastUpdated) - new Date(a.lastUpdated);
    });

  // Toggle publish status
  const togglePublishStatus = (courseId) => {
    setCourses(courses.map(course => 
      course.id === courseId 
        ? { ...course, published: !course.published } 
        : course
    ));
  };

  return (
    <div className="p-4 lg:ml-10 pt-20 w-full max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
        {/* Header and Stats */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">My Courses</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full md:w-auto">
            <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
              <div className="flex items-center">
                <img src={assets.my_course_icon} alt="Courses" className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                <span className="text-sm md:text-base text-gray-600">Total Courses</span>
              </div>
              <div className="text-xl md:text-2xl font-bold mt-1">{totalCourses}</div>
            </div>
            
            <div className="bg-green-50 p-3 md:p-4 rounded-lg">
              <div className="flex items-center">
                <img src={assets.patients_icon} alt="Students" className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                <span className="text-sm md:text-base text-gray-600">Total Students</span>
              </div>
              <div className="text-xl md:text-2xl font-bold mt-1">{totalStudents}</div>
            </div>
            
            <div className="bg-purple-50 p-3 md:p-4 rounded-lg">
              <div className="flex items-center">
                <img src={assets.earning_icon} alt="Earnings" className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                <span className="text-sm md:text-base text-gray-600">Total Earnings</span>
              </div>
              <div className="text-xl md:text-2xl font-bold mt-1">${totalEarnings.toFixed(2)}</div>
            </div>
          </div>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-md ${
                filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('published')}
              className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-md ${
                filter === 'published' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Published
            </button>
            <button
              onClick={() => setFilter('draft')}
              className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-md ${
                filter === 'draft' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Drafts
            </button>
          </div>
          
          <div className="flex items-center w-full sm:w-auto">
            <span className="text-sm md:text-base text-gray-600 mr-2 whitespace-nowrap">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1.5 md:px-3 md:py-2 text-sm md:text-base w-full sm:w-auto"
            >
              <option value="lastUpdated">Last Updated</option>
              <option value="title">Title</option>
              <option value="students">Students</option>
              <option value="earnings">Earnings</option>
            </select>
          </div>
        </div>

        {/* Courses Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Price
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Students
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                  Earnings
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCourses.map((course) => (
                <tr key={course.id}>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-16">
                        <img className="h-10 w-16 object-cover rounded" src={course.thumbnail} alt={course.title} />
                      </div>
                      <div className="ml-2 md:ml-4">
                        <div className="text-sm font-medium text-gray-900 line-clamp-1">{course.title}</div>
                        <div className="text-xs text-gray-500">Updated: {course.lastUpdated}</div>
                        <div className="sm:hidden text-xs text-gray-500 mt-1">${course.price.toFixed(2)}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500 hidden sm:table-cell">
                    ${course.price.toFixed(2)}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500 hidden md:table-cell">
                    {course.students}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500 hidden lg:table-cell">
                    ${course.earnings.toFixed(2)}
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      course.published 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {course.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium">
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        onClick={() => togglePublishStatus(course.id)}
                        className={`text-xs px-2 py-1 md:px-3 md:py-1 rounded ${
                          course.published
                            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                        }`}
                      >
                        {course.published ? 'Unpublish' : 'Publish'}
                      </button>
                      <button className="text-xs px-2 py-1 md:px-3 md:py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                        Edit
                      </button>
                      <button className="text-xs px-2 py-1 md:px-3 md:py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No courses found matching your criteria
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;