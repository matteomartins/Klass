interface IntervalProps {
    id: string;
    title: string;
}

export interface TurnProps {
    id: string;
    title: string;
    schedule?: string;
    classDuration?: number;
    days?: Array<number>;
    intervals: Array<IntervalProps>;
}

export interface ModuleProps {
    id: string;
    content: string;
}

export interface CourseProps {
    name: string;
    text: string;
    content: Array<ModuleProps>;
}
