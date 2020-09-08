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
}

export interface CourseProps {
    id: string;
    title: string;
    content: Array<ModuleProps>;
}

export interface CardProps {
    id: string;
    title: string;
    content?: any;
}
