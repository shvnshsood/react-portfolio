import React, { useState } from 'react'
import workapi from './Api/workapi';
import { motion } from "framer-motion"

const Howitworks = () => {

    const [workData, SetworkData] = useState(workapi);



    return (
        <>
            <section>
                <div className='work-container container'>
                    <h1 className='main-heading text-center'>HOW DOES IT WORK</h1>
                    <motion.div  className="row"> 

                        {workData.map((curr) => {
                        const {id, logo, title, info} = curr;


                            return (
                                <>
                                    <motion.div  whileHover={{ scale: 1.2 }} className='col-12 col-lg-4 text-center work-container-subdiv'>  <i class={`fontawesome-style ${logo}`}></i>

                                        <h2 className="sub-heading">{title}</h2>
                                        <p className="main-hero-para w-100">{info}
                                        </p>
                                    </motion.div> 

                                </>
                            );

                        })}

                    </motion.div>
                </div>

            </section>
        </>
    );
};

export default Howitworks