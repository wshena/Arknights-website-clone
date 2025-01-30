import React from 'react'
import OperatorPage from './OperatorPage';

async function fetchOperators(name: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/operator/${name}`, {
    next: { revalidate: 10 },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch operators');
  }
  return response.json();
}

async function fetchOperatorsRhodesAPI(name: string) {
  const response = await fetch(`${process.env.NETX_PUBLIC_RHODES_API}/operator/${name}`, {
    next: { revalidate: 10 },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch operators');
  }
  return response.json();
}

const page = async ({ params }: { params: any }) => {
  const { name, id } = await params;

  try {
    // Parallel fetch using Promise.all
    const [operatorDetail, operatorRhodes] = await Promise.all([
      fetchOperators(name),
      fetchOperatorsRhodesAPI(name),
    ]);

    // Pass data to the component
    return <OperatorPage rhodesData={operatorRhodes} operatorData={operatorDetail} operatorId={id} />;
  } catch (error) {
    console.error('Error fetching data:', error);
    return <h1>Failed to load operator data</h1>;
  }
};

export default page