import React, {createContext, useState, useEffect} from "react";

export const ProjectValue = createContext();

const ProjectValueProvider = (props) => {

    const [project, setProject] = useState(localStorage.getItem('project') || 'test');

    useEffect(() => {
        localStorage.setItem('Project', project);
    }, [project])

    const toggleProject = (param) => {
        setProject(param)

    }

    return (
        <ProjectValue.Provider value={{project, toggleProject}}>
            {props.children}
        </ProjectValue.Provider>
    )

}

export default ProjectValueProvider;