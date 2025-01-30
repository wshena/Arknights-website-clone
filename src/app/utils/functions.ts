

export function filterOperatorsByFaction(operator:any[], factionName: string): any[] {
  return operator.filter((item: any) =>
    item.affiliation.some((affiliation: string) => affiliation === factionName)
  );
}

export const findOperatorClassMatch = (operatorClasses:any, classArray:any) => {
  return operatorClasses.find((operatorClass:any) => 
    classArray.some((className:any) => operatorClass.name.toLowerCase() === className.toLowerCase())
  );
};