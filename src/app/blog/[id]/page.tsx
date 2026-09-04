import blogIndex from '@/../public/blogs/index.json'
import BlogClientPage from './client-page'

export function generateStaticParams() {
	return blogIndex.filter(item => item.slug).map(item => ({ id: item.slug }))
}

export default function Page() {
	return <BlogClientPage />
}
