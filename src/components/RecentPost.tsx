import React from 'react'
import Card from './Card.tsx';
import { Link } from 'react-router-dom';

const RecentPost: React.FC = () => {
    return (<>
        <section className="container mx-auto p-10">
            <div className='flex justify-between'>
                <h2 className="text-3xl font-bold mb-6">Our Recent Post</h2>
                <div>
                    <Link className="block py-2 px-4 rounded bg-purple-700 hover:bg-purple-600  md:hover:bg-transparent md:border md:border-purple-700 md:text-white md:hover:text-purple-600" to={'/blog'}>View All</Link>
                </div>
            </div>
            <div className="my-10 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img className="w-full h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-18GVXtbTcpVNXOFb4RmYUC1yNjTdTiGruO6RRwEFXxcehqQj6doK6xYW31VI47RbR0&usqp=CAU" alt="VR & AI Technology" />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <div className="text-gray-600 text-sm font-semibold mb-2">DEVELOPMENT • 16 March 2023</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How to make a Game look more attractive with New VR & AI Technology</h2>
                    <p className="text-gray-700 mb-6">
                        Google has been investing in AI for many years and bringing its benefits to individuals, businesses, and communities.
                        Whether it's publishing state-of-the-art research, building helpful products, or developing tools and resources that enable others,
                        we're committed to making AI accessible to everyone.
                    </p>
                    {/* <button className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 focus:outline-none">
                        Read More
                    </button> */}
                    <div>


                        <button className="block mt-10 py-2 px-4 rounded bg-purple-700 hover:bg-purple-600 md:bg-transparent  md:border md:border-purple-700 md:text-purple-700 md:hover:text-white">Read More</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* <div className="bg-white p-4 shadow-md">
        <img src="path-to-image" alt="post image" className="w-full h-48 object-cover mb-4"/>
        <h3 className="text-2xl font-semibold">Post Title</h3>
        <p className="text-gray-700">Brief description of the post.</p>
      </div> */}
                {/* Repeat similar blocks for more posts */}
                {/* grid grid-cols-1 md:grid-cols-3 gap-6 */}
                <Card
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-18GVXtbTcpVNXOFb4RmYUC1yNjTdTiGruO6RRwEFXxcehqQj6doK6xYW31VI47RbR0&usqp=CAU'}
                    category="Travel"
                    date="13 March 2023"
                    title="8 Rules Of Travelling In Sea You Need To Know"
                    description="Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs"
                    link="#"
                />
                <Card
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-18GVXtbTcpVNXOFb4RmYUC1yNjTdTiGruO6RRwEFXxcehqQj6doK6xYW31VI47RbR0&usqp=CAU'}
                    category="Development"
                    date="11 March 2023"
                    title="How to build strong portfolio and get a Job in UI/UX"
                    description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from"
                    link="#"
                />
                <Card
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-18GVXtbTcpVNXOFb4RmYUC1yNjTdTiGruO6RRwEFXxcehqQj6doK6xYW31VI47RbR0&usqp=CAU'}
                    category="Sports"
                    date="10 March 2023"
                    title="How to Be a Professional Footballer in 2023"
                    description="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Survival strategies to ensure proactive"
                    link="#"
                />
            </div>
        </section>
    </>
    )
}
export default RecentPost;
