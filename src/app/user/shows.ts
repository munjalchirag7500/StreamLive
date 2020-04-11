export interface IShows{
    name:  String,
    owner:  string,
    image:string,
    season:[{
        s_name:string,
        s_img:string,
        s_link:string,
        episode:[{
            e_no:number,
            e_name:string,
            e_link:string,
            e_dlink:string,
            e_img:string
        }]
    }]

}