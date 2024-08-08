import React from 'react'

const Footer = () => {
  return (
    <div>
      

<footer className="bg-white rounded-lg shadow  m-4 ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/logo2.png" className="h-9" alt="Logo" />
                <span className="self-center text-2xl font-semibold font-mono whitespace-nowrap text-black">Xfile</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 md:text-sm text-xs font-medium text-gray-500 sm:mb-0 ">
                <li>
                    <a href="https://x.com/jaiagdayemawer" className="hover:underline me-4 md:me-6">Made with ❤️ by Jai Kumar</a>
                </li>
                <li>
                    <a href="https://github.com/jaikumar9" className="hover:underline me-4 md:me-6">GitHub</a>
                </li>
                <li>
                    <a href="mailto:jaiagdayemawer556@gmail.com" className="hover:underline me-4 md:me-6">Mail</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jai-agdayemawer" className="hover:underline">Linkedin</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a  href="/" className="hover:underline">XFile</a>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  )
}

export default Footer
