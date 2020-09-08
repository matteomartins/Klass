import { CourseProps, ModuleProps } from "./CommonInterfaces";

export function create4Functions(
    courses: Array<CourseProps>,
    setCourses: Function,
    modules: Array<ModuleProps>,
    setModules: Function,
    selectedCourse: number,
    setSelectedCourse: Function
) {
    return {
        addCourse: (name: string) => {
            if (
                name.trim() !== "" &&
                !courses.find(
                    (course) => course.id.toLowerCase() === name.toLowerCase()
                )
            ) {
                setCourses([
                    ...courses,
                    { id: name, title: name, content: [] },
                ]);
            }
        },
        removeCourse: (name: string) => {
            let newCourses = courses;
            const deleted = newCourses.find(
                (deletedContent) => deletedContent.id === name
            );
            if (deleted) {
                const index = newCourses.indexOf(deleted);
                if (selectedCourse === index) setSelectedCourse(-1);
                newCourses.splice(index, 1);
                setCourses([...newCourses]);
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
                    title: name.trim(),
                    content: [],
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
            const newCourses = [...courses];
            const deleted = newCourses[selectedCourse].content.find(
                (deletedContent) => deletedContent.id === name
            );
            if (deleted) {
                const index = newCourses[selectedCourse].content.indexOf(
                    deleted
                );
                newCourses[selectedCourse].content.splice(index, 1);
                setCourses([...newCourses]);
            }
        },
    };
}
