import React, { useEffect, useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import urlExtractor from 'utils/urlExtractor'

const BlogListing = ({ data, imgDom }) => {
  const [blogs, setBlogs] = useState(data)
  const [filteredBlogs, setFilteredBlogs] = useState(data)
  const [technology, setTechnology] = useState('All')

  // Memoize technologies extraction
  const technologies = useMemo(() => {
    return [
      'All',
      ...new Set(data.map((blog) => blog.field_technologies_reference)),
    ]
  }, [data])

  // Handle technology filter change
  const handleTechnologyChange = useCallback((tech) => {
    setTechnology(tech)
  }, [])

  // Update filtered blogs when technology or blogs change
  useEffect(() => {
    if (technology && technology !== 'All') {
      setFilteredBlogs(blogs.filter(blog => blog.field_technologies_reference === technology))
    } else {
      setFilteredBlogs(blogs)
    }
  }, [technology, blogs])

  return (
    <div className='flex flex-wrap'>
      <aside className='lg:w-[15%] w-full p-2 border-l-2 border-[#ddd]'>
        <h2 className='text-xl font-bold text-[#DC248B] pb-6 mt-16'>
          Technologies
        </h2>
        <ul>
          {technologies.map((tech, index) => (
            <li
              key={index}
              onClick={() => handleTechnologyChange(tech)}
              className={`cursor-pointer py-2 px-2 ${
                technology === tech ? 'font-bold bg-black text-white' : 'font-normal'
              }`}
            >
              {tech}
            </li>
          ))}
        </ul>
      </aside>
      <main className='lg:w-[85%] w-full p-3'>
        {filteredBlogs.map((blog, index) => (
          <div key={index} className='lg:ml-24 mb-5 mt-12'>
            <h2 className='lg:text-2xl text-xl font-bold text-black mb-8'>
              {blog.field_slider_desc}
            </h2>
            <Image
              src={imgDom + blog.field_slider_image}
              alt={blog.field_slider_title || 'Blog Image'}
              width={600}
              height={500}
              className='w-full h-auto object-cover'
              priority
            />
            <h2 className='lg:text-1xl text-xl font-medium text-black mt-8'>
              {blog.field_blog_description_trimmed}
            </h2>
            <Link
              href={`/blogs/${urlExtractor(blog.field_slider_link)[1]}`}
              className='brand-expertise lg:mt-6 mt-4 mb-4 inline-block'
            >
              {urlExtractor(blog.field_slider_link)[0]}
            </Link>
          </div>
        ))}
      </main>
    </div>
  )
}

export default BlogListing
