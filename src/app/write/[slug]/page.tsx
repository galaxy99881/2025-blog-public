import blogIndex from '@/../public/blogs/index.json'
import EditBlogClientPage from './client-page'

export function generateStaticParams() {
	return blogIndex.filter(item => item.slug).map(item => ({ slug: item.slug }))
}

export default function Page() {
	return <EditBlogClientPage />
}
