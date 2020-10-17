interface IntervalProps {
    id: string;
    title: string;
}

export interface TurnProps {
    id: string;
    title: string;
    content: {
        schedule?: string;
        classDuration?: number;
        days?: Array<number>;
        intervals: Array<IntervalProps>;
    };
}

export interface ModuleProps {
    id: string;
    title: string;
    content?: Array<SubjectProps>;
}

export interface SubjectProps {
    id: string;
    title: string;
    content?: number
}

export interface CourseProps {
    id: string;
    title: string;
    content: Array<ModuleProps>;
}

export interface TeacherProps {
    id: string;
    title: string;
    content: Array<SubjectProps>;
    email: string;
}

export interface ClassProps {
    id: string;
    title: string;
    content?: {
        turn?: string;
        module?: string;
    };
}

export interface CardProps {
    id: string;
    title: string;
    content?: any;
}
