import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import Modal from 'react-modal'; // Make sure to install react-modal

// Set app element for accessibility
Modal.setAppElement('#root');

const AddCourse = () => {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    price: '',
    discount: '',
    thumbnail: null,
    chapters: []
  });

  const [currentChapterIndex, setCurrentChapterIndex] = useState(null);
  const [lectureModalIsOpen, setLectureModalIsOpen] = useState(false);
  const [newLecture, setNewLecture] = useState({
    title: '',
    duration: '',
    url: '',
    isPreview: false
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse(prev => ({ ...prev, [name]: value }));
  };

  // Handle thumbnail upload
  const handleThumbnail = (e) => {
    setCourse(prev => ({ ...prev, thumbnail: e.target.files[0] }));
  };

  // Add new chapter
  const addChapter = () => {
    if (!course.title) {
      alert('Please enter a course title first');
      return;
    }

    const chapterTitle = prompt('Enter chapter title:');
    if (chapterTitle) {
      setCourse(prev => ({
        ...prev,
        chapters: [...prev.chapters, {
          title: chapterTitle,
          lectures: []
        }]
      }));
    }
  };

  // Add lecture to chapter
  const addLecture = (chapterIndex) => {
    setCurrentChapterIndex(chapterIndex);
    setLectureModalIsOpen(true);
  };

  // Save lecture
  const saveLecture = () => {
    if (!newLecture.title || !newLecture.url) {
      alert('Lecture title and URL are required');
      return;
    }

    const updatedChapters = [...course.chapters];
    updatedChapters[currentChapterIndex].lectures.push({...newLecture});
    
    setCourse(prev => ({
      ...prev,
      chapters: updatedChapters
    }));

    // Reset form and close modal
    setNewLecture({
      title: '',
      duration: '',
      url: '',
      isPreview: false
    });
    setLectureModalIsOpen(false);
  };

  // Remove chapter
  const removeChapter = (index) => {
    const newChapters = course.chapters.filter((_, i) => i !== index);
    setCourse(prev => ({ ...prev, chapters: newChapters }));
  };

  // Remove lecture
  const removeLecture = (chapterIndex, lectureIndex) => {
    const updatedChapters = [...course.chapters];
    updatedChapters[chapterIndex].lectures.splice(lectureIndex, 1);
    setCourse(prev => ({ ...prev, chapters: updatedChapters }));
  };

  return (
    <div className="p-6 lg:ml-10 pt-20 w-full max-w-7xl">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        {/* Course Thumbnail */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Course Thumbnail</label>
          <div className="flex items-center">
            <label className="flex flex-col items-center justify-center w-40 h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              {course.thumbnail ? (
                <img 
                  src={URL.createObjectURL(course.thumbnail)} 
                  alt="Thumbnail preview" 
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <>
                  <img src={assets.file_upload_icon} alt="Upload" className="w-10 h-10 mb-2" />
                  <span className="text-sm text-gray-500">Upload Image</span>
                </>
              )}
              <input 
                type="file" 
                className="hidden" 
                onChange={handleThumbnail} 
                accept="image/*"
              />
            </label>
            {course.thumbnail && (
              <button 
                onClick={() => setCourse(prev => ({ ...prev, thumbnail: null }))}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                <img src={assets.cross_icon} alt="Delete" className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Course Title */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Course Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={course.title}
            onChange={handleChange}
            className="w-1/3 px-4 py-2 border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter course title"
            required
          />
        </div>

        {/* Course Description */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Course Description
          </label>
          <textarea
            id="description"
            name="description"
            value={course.description}
            onChange={handleChange}
            rows={4}
            className="w-1/3 px-4 py-2 border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Describe your course..."
          />
        </div>

        {/* Price & Discount */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
              Course Price ($)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={assets.doller_icon} alt="$" className="w-4 h-4" />
              </div>
              <input
                type="number"
                id="price"
                name="price"
                value={course.price}
                onChange={handleChange}
                className="pl-8 w-1/3 px-4 py-2 border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="0.00"
              />
            </div>
          </div>
          <div>
            <label htmlFor="discount" className="block text-sm font-medium text-gray-700 mb-2">
              Discount (%)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={assets.discount_icon} alt="%" className="w-4 h-4" />
              </div>
              <input
                type="number"
                id="discount"
                name="discount"
                value={course.discount}
                onChange={handleChange}
                className="pl-8 w-1/3 px-4 py-2 border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="0"
                min="0"
                max="100"
              />
            </div>
          </div>
        </div>

        {/* Chapters Section */}
        <div className="mb-6 w-2/3">
          <label className="block text-sm font-medium text-gray-700 mb-4">Course Chapters</label>
          
          {course.chapters.length === 0 ? (
            <div className="text-gray-500 mb-4">No chapters added yet</div>
          ) : (
            course.chapters.map((chapter, chapterIndex) => (
              <div key={chapterIndex} className="mb-6 border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-lg">{chapter.title}</h3>
                  <button
                    onClick={() => removeChapter(chapterIndex)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <img src={assets.cross_icon} alt="Delete" className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Lectures in this chapter */}
                {chapter.lectures.length > 0 && (
                  <div className="ml-4 mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Lectures:</h4>
                    <ul className="space-y-2">
                      {chapter.lectures.map((lecture, lectureIndex) => (
                        <li key={lectureIndex} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                          <span>
                            {lecture.title} {lecture.isPreview && '(Preview)'}
                          </span>
                          <button
                            onClick={() => removeLecture(chapterIndex, lectureIndex)}
                            className="text-red-400 hover:text-red-600 text-xs"
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Add Lecture Button */}
                <button
                  onClick={() => addLecture(chapterIndex)}
                  className="flex items-center text-blue-600 hover:text-blue-800 text-sm mt-2 ml-4"
                >
                  <img src={assets.add_icon} alt="Add" className="w-4 h-4 mr-1" />
                  Add Lecture
                </button>
              </div>
            ))
          )}
          
          {/* Add Chapter Button */}
          <button
            onClick={addChapter}
            className="flex items-center text-blue-600 hover:text-blue-800 mt-4"
          >
            <img src={assets.add_icon} alt="Add" className="w-5 h-5 mr-1" />
            Add Chapter
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            type="button"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <img src={assets.blue_tick_icon} alt="Save" className="w-5 h-5 mr-2 inline" />
            Publish Course
          </button>
        </div>
      </div>

      {/* Lecture Modal */}
      <Modal
        isOpen={lectureModalIsOpen}
        onRequestClose={() => setLectureModalIsOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Add Lecture"
      >
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-xl font-bold mb-4">Add New Lecture</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lecture Title</label>
              <input
                type="text"
                value={newLecture.title}
                onChange={(e) => setNewLecture({...newLecture, title: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Enter lecture title"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration (minutes)</label>
              <input
                type="number"
                value={newLecture.duration}
                onChange={(e) => setNewLecture({...newLecture, duration: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Enter duration"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lecture URL</label>
              <input
                type="url"
                value={newLecture.url}
                onChange={(e) => setNewLecture({...newLecture, url: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Enter video URL"
                required
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="preview"
                checked={newLecture.isPreview}
                onChange={(e) => setNewLecture({...newLecture, isPreview: e.target.checked})}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="preview" className="ml-2 block text-sm text-gray-700">
                Mark as preview (free to watch)
              </label>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={() => setLectureModalIsOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={saveLecture}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save Lecture
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal Styles */}
      <style jsx global>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal {
          background: white;
          border-radius: 0.5rem;
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default AddCourse;