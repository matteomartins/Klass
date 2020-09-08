import { ModuleProps, SubjectProps } from "./commonInterfaces";

export function create5Functions(
    subjects: Array<SubjectProps>,
    setSubjects: Function,
    modules: Array<ModuleProps>,
    setModules: Function,
    selectedModule: number,
    setSelectedModule: Function
) {
    return {
        addSubject: (name: string) => {
            if (
                name.trim() !== "" &&
                !subjects.find(
                    (subject) => subject.id.toLowerCase() === name.toLowerCase()
                )
            ) {
                setSubjects([
                    ...subjects,
                    { id: name, title: name, content: [] },
                ]);
            }
        },
        removeSubject: (name: string) => {
            let newSubjects = subjects;
            const deleted = newSubjects.find(
                (deleted_course) => deleted_course.id === name
            );
            if (deleted) {
                const index = newSubjects.indexOf(deleted);
                if (selectedModule === index) setSelectedModule(-1);
                newSubjects.splice(index, 1);
                setSubjects([...newSubjects]);
            }
        },
        addModule: (name: string) => {
            if (
                name.trim() &&
                !modules.find(
                    (module) =>
                        module.title.toLowerCase() === name.toLowerCase()
                )
            ) {
                let newModules: Array<any> = [...modules];
                newModules.push({
                    id: `item-${name.trim()}-${new Date().getTime()}`,
                    content: name.trim(),
                });
                setModules(newModules);
            }
        },
        removeModule: (index: number) => {
            const newModules = [...modules];
            newModules.splice(index, 1);
            setModules(newModules);
        },
        removeConnection: (name: string) => {
            const newModules = [...modules];
            const deleted = newModules[selectedModule].content?.find(
                (deleted_content) => deleted_content.id === name
            );
            if (deleted) {
                const index = newModules[selectedModule].content?.indexOf(
                    deleted
                );
                if (!index) return;
                newModules[selectedModule].content?.splice(index, 1);
                setModules([...newModules]);
            }
        },
    };
}
