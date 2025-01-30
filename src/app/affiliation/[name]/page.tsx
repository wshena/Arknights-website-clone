import React from 'react';
import AffiliationNamePage from './AffiliationNamePage';
import { ArknightGroup, ArknightNations, ArknightsAffiliations } from '@/app/utils/const';

export async function generateStaticParams() {
  return ArknightsAffiliations.map((item) => ({
    name: encodeURIComponent(item.faction),
  }));
}

async function fetchOperators(name: string) {
  const affiliationName = decodeURIComponent(name).toLowerCase();
  const affiliationData = ArknightsAffiliations.find((item:any) => item.faction.toLowerCase() === affiliationName)

  const isNation = (affiliation:string) => {
    return ArknightNations.some(nation => affiliation.toLowerCase().includes(nation.toLowerCase()));
  };

  const isTeam = (affiliation:string) => {
    return ArknightGroup.some(team => affiliation.toLowerCase().includes(team.toLowerCase()));
  }

  // Menentukan nilai param berdasarkan isNation dan isTeam
  let param = '';
  if (isNation(affiliationName)) {
    param = 'nationId';
  } else if (isTeam(affiliationName)) {
    param = 'teamId';
  } else {
    param = 'groupId';
  }
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/operator/search?${param}=${affiliationData?.params}`, {
    next: { revalidate: 10 },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch operators');
  }
  return response.json();
}

export default async function Page({ params }: { params: any }) {
  const {name} = await params
  const affiliationName = decodeURIComponent(name).toLowerCase();

  const operators = await fetchOperators(affiliationName);

  return (
    <AffiliationNamePage
      OperatorArray={operators}
      affiliationName={affiliationName}
    />
  );
}
