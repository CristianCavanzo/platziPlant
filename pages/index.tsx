import { getPlantList } from '@api/index'
import { Authors } from '@components/Authors'
import { Hero } from '@components/Hero'
import { Layout } from '@components/Layout'
import { PlantCollection } from '@components/PlantCollection'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps<{ plants: Plant[] }> = async () => {
  const plants = await getPlantList({ limit: 10 })
  return { props: { plants }, revalidate: 5 * 60 }
}
export default function Home({
  plants,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Hero {...plants[0]} className="mb-20" />
      <Authors className="mb-10" />
      <PlantCollection plants={plants} variant="vertical" className="mb-24" />
      <PlantCollection plants={plants} variant="square" />
    </Layout>
  )
}
