export interface pupilType {
    "name": {
        "first": string,
        "last": string
      },
      "image": string,
      "dateOfBirth": string, // format date
      "phones": 
        {
          "phone": string,
          "primary": boolean
        }[],
      "sex": string, // male OR female
      "description"?: string
      "id"?: symbol
}