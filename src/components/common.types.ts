export type TErrorFinderData = {
	name: string;
	heading: string;
	activities: TActivities[];
};

export type TActivities = {
	'activity_name'?: string;
	order: number;
	questions: TQuestion[];
	
};

export type TQuestion = {
	'round_title'?: string;
	'is_correct'?: boolean;
	stimulus?: string;
	order?: number;
	'user_answers'?: string[] | boolean[];
	feedback?: string;
	questions?: TQuestion[];
}