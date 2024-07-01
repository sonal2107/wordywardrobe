import React from 'react'
import "./Timeline.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaGraduationCap } from "react-icons/fa"
import { FaRegLightbulb } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { MdOutlineCardMembership } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { BsEnvelopePaper } from "react-icons/bs";
import { MdPerson } from "react-icons/md";

const Timeline = () => {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#D4DC12' className='timeline-element'>
                <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{ background: "#000", color: "#fff" }} icon={<BiNotepad />} date='March 2023'>
                    <h3>Marketing Head</h3>
                    <p>Oversaw marketing strategies for Techvista 2022-23. Led a team to effectively promote the festival, significantly boosting participation and engagement through innovative marketing campaigns and initiatives.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{ background: "#000", color: "#fff" }} icon={<FaRegLightbulb />} date='1st March 2023'>
                    <h3>Event Head - Treasure Hunt "CLUEMINATI"</h3>
                    <p>Organized and led the Treasure Hunt event, "CLUEMINATI", during Techvista 2022-23. Managed event planning, coordination, and execution, ensuring a seamless and engaging experience for participants.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{ background: "#000", color: "#fff" }} icon={<IoMdBook />} date='3rd March 2023'>
                    <h3>V Search</h3>
                    <p>Participated in the V-Search research paper presentation competition, presenting a paper that was subsequently published in the journal Vijanan 2023.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{ background: "#000", color: "#fff" }} icon={<IoMdBook />} date='10th July 2023'>
                    <h3>Research Publication in IJNRD</h3>
                    <p>Published a research paper on fake news detection using logistic regression in the International Journal of Novel Research and Development (IJNRD).</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{ background: "#000", color: "#fff" }} icon={<MdOutlineCardMembership />} date='Sept 2023 - March 2024'>
                    <h3>NAAC Committee Volunteer</h3>
                    <p>Contributed to the NAAC accreditation process by creating a detailed 3D model of the college. Utilized advanced modeling techniques to accurately represent campus infrastructure, enhancing the institution's presentation and evaluation.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{ background: "#000", color: "#fff" }} icon={<FaRegLightbulb />} date='9th December 2023'>
                    <h3>AAVISHKAR (Zonal Round, Mumbai 1 Zone)</h3>
                    <p>Presented at Aavishkar PG Level at the 18th Aavishkar Inter-Collegiate/Institute/Department Research Convention (Zonal Round), organized by the University of Mumbai at Lala Lajpat Rai College of Commerce and Economics, Mahalaxmi, Mumbai on December 9, 2023, for Mumbai I zone.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{ background: "#000", color: "#fff" }} icon={<FaChalkboardTeacher />} date='Jan 2024 - March 2024'>
                    <h3>Course Instructor - Blender 3D</h3>
                    <p>Conducted a Value Added Course on Blender 3D, teaching students the fundamentals and advanced techniques of 3D modeling. Developed course materials and provided hands-on training to enhance participants' skills in Blender 3D.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{ background: "#000", color: "#fff" }} icon={<FaRegLightbulb />} date='15th March 2024'>
                    <h3>Event Head - Escape Room ("Locked in Time")</h3>
                    <p>Hosted the Escape Room event, "Locked in Time", at Techvista 2023-24. Directed the creation and implementation of challenging puzzles and immersive scenarios, providing participants with a memorable and engaging experience.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{ background: "#000", color: "#fff" }} icon={<FaMicrophoneAlt />} date='20th April & 4th May 2024'>
                    <h3>Anchor - TechNext 2024 Symposium</h3>
                    <p>Anchored the TechNext 2024 symposium, effectively engaging the audience and ensuring the smooth flow of events. Delivered presentations and facilitated discussions, contributing to the symposium's success.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{ background: "#000", color: "#fff" }} icon={<MdPerson />} date='15th May 2024'>
                    <h3>Internship at VSIT</h3>
                    <p>Successfully completed an internship, receiving a completion letter from the college.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{ background: "#000", color: "#fff" }} icon={<BsEnvelopePaper />} date='15th May 2024'>
                    <h3>Letter of Recommendation</h3>
                    <p>Obtained a Letter of Recommendation from the principal for outstanding academic and extracurricular achievements.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Timeline