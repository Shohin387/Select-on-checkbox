import React, { useRef, useState } from "react";
import SideBar from "./sideBar";
import { Provider } from "./provider/provider";
import AllProjects from "./allPrjoacts";
import style from "./css/style.module.css"

const App = () => {
    const [vueProjects, setVueProjects] = useState({name: "Vue", message: "А их нету)))", isActive: true})
    const [reactProjects, setReactProjects] = useState({name: "React", message: <a>ну типо это</a>, isActive: true})
    const [angularProjects, setAngularProjects] = useState({name: "Angular", message: "В процессе", isActive: true})
    const projects = [vueProjects, reactProjects, angularProjects]

    const update = (name) => {
        switch (name) {
            case "Vue":
                setVueProjects({...vueProjects, isActive: !vueProjects.isActive})
                break;
        
            case "React":
                setReactProjects({...reactProjects, isActive: !reactProjects.isActive})
                break
            case "Angular":
                setAngularProjects({...angularProjects, isActive: !angularProjects.isActive})


        }
    }


    return(
        <main className={style.mainPage}>
            
            <SideBar projects={projects} update={update} >
                <Provider projects={projects}>
                    <AllProjects/>
                </Provider>
            </SideBar>
        </main>
        
    )
}

export default App