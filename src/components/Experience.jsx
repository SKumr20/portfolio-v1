import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const Experience = ({ role, company, year, description }) => {
  return (
    <Card>
    <CardHeader>
      <CardTitle>{role}</CardTitle>
      <CardDescription>{company} | {year}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
  )
}

export default Experience