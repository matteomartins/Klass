import { TeacherProps } from "./CommonInterfaces";

export function create6Functions(
    teachers: Array<TeacherProps>,
    setTeachers: Function,
    selectedTeacher: number,
    setSelectedTeacher: Function
) {
    return {
        addTeacher: (name: string) => {
            if (
                name.trim() !== "" &&
                !teachers.find(
                    (teacher) => teacher.id.toLowerCase() === name.toLowerCase()
                )
            ) {
                const newTeachers = teachers;
                newTeachers.push({ id: name, title: name, content: [] });
                setTeachers([...newTeachers]);
            }
        },
        removeTeacher: (name: string) => {
            let newTeachers = teachers;
            const deleted = newTeachers.find(
                (deletedContent) => deletedContent.id === name
            );
            if (deleted) {
                const index = newTeachers.indexOf(deleted);
                if (selectedTeacher === index) setSelectedTeacher(-1);
                newTeachers.splice(index, 1);
                setTeachers([...newTeachers]);
            }
        },
        removeConnection: (name: string) => {
            const newTeachers = [...teachers];
            const deleted = newTeachers[selectedTeacher].content?.find(
                (deletedContent) => deletedContent.id === name
            );
            if (deleted) {
                const index = newTeachers[selectedTeacher].content?.indexOf(
                    deleted
                );
                if (!index) return;
                newTeachers[selectedTeacher].content?.splice(index, 1);
                setTeachers([...newTeachers]);
            }
        },
    };
}
