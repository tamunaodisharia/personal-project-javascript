export interface teacherType {
    "name": {
        "first": string,
        "last": string
      },
      "image": string,
      "dateOfBirth": string, 
      "emails": 
        {
          "email": string,
          "primary": boolean
        }[]
      ,
      "phones": 
        {
          "phone": string,
          "primary": boolean
        }[]
      ,
      "sex": string,
      "subjects": 
        {
          "subject": string
        }[]
      ,
      "description"?: string,
      "id"?: symbol
}