import { createClient } from 'next-sanity'
import { NextResponse } from 'next/server'

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    token: process.env.SANITY_API_TOKEN,
    apiVersion: '2024-01-01',
})

export async function POST(req: Request) {
    try {
        const { name, email, comment, postId } = await req.json()

        if (!name || !email || !comment || !postId) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 })
        }

        await client.create({
            _type: 'comment',
            post: {
                _type: 'reference',
                _ref: postId,
            },
            name,
            email,
            comment,
            approved: false, // Default to false for moderation
        })

        return NextResponse.json({ message: 'Comment submitted successfully' }, { status: 200 })
    } catch (error) {
        console.error('Comment submission error:', error)
        return NextResponse.json({ message: 'Error submitting comment', error }, { status: 500 })
    }
}
