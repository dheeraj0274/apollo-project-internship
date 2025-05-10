import Doctor from '../models/doctormodel.js'


export const addDoctor = async(req,res)=>{
    try {
        const doctor = new Doctor (req.body)
        await doctor.save();
        res.status(201).json(doctor)
        
    } catch (err) {
        res.status(400).json({message:err.message})
        
    }
}
export const doctors = async(req,res)=>{
    try {
        const all = await Doctor.find()
        res.status(200).json(all)
    } catch (error) {
        res.status(400).json({message:error.message})
        
        
        
    }
}
 export const getDoctors = async(req,res)=>{
    const {page= 1 , limit = 10 , speciality , location , mode , language , fee , experience} = req.query;
    console.log(req.query);
    
   
    
    const filter = {}
    if(speciality) filter.speciality=speciality;
    if(mode?.length) filter.mode = {$in: Array.isArray(mode) ? mode : [mode]}
    if(location) filter.location=location;
    if(language?.length) filter.language={$in:Array.isArray(mode)? language : [language]};
    if(fee?.length){
        const feeArray = Array.isArray(fee) ? fee : [fee];

        const feeCondition = feeArray.map((range)=>{
            if(range.includes("+")){
                const min = parseInt(range.replace("+",""),10)
               return {fee:{$gte:min}}
            }
            else{
                const [min, max]= range.split("-").map(Number);
                return {fee:{$gte : min , $lte : max}}
            }

        })
        
        filter.$or = filter.$or ? [...filter.$or, ...feeCondition] : feeCondition;
    // 
    }
      
    if(experience?.length) filter.experience={$in:experience};
  

   
    try {
        const doctors = await Doctor.find(filter).skip((page - 1)*limit).limit(Number(limit))
        const  total = await Doctor.countDocuments(filter);
        res.status(200).json({total, page :Number(page), doctors})
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
 }


