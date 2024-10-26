import React from "react";
import CardProjects from "./cardProjects";
import { useContext } from "react";
import { contex } from "./provider/provider";
import style from './css/style.module.css'

const AllProjects = () => {
    const MyContext = useContext(contex)

    return (
        <section className={style.projects}>
            {MyContext ? MyContext.map((el) => (
                <CardProjects el={el} />
            )) : <h1>Нету проектов</h1>}
            
        </section>
    )
}

export default AllProjects