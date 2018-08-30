export interface jobs{
    company:string,
    title:string,
    dateposted:string,
    status:string
    shortlisted:{
        name:string,
        worksat:string,
        exp:string,
        ctc:number
    },
    interviews:{
        interview:string,
        interviewer:string,
        date:string,
        result:string
    }
}