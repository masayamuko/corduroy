'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'

interface Video {
  id: number
  title: string
  duration: string
  completed: boolean
  videoUrl: string
}

interface Course {
  id: number
  title: string
  description: string
  videos: Video[]
}

export default function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [course, setCourse] = useState<Course | null>(null)
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null)
  const [completedVideos, setCompletedVideos] = useState<Set<number>>(new Set())
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem('courseAuth')
    if (!auth) {
      router.push('/courses')
      return
    }
    setIsAuthenticated(true)

    const courseId = parseInt(id)
    const savedProgress = localStorage.getItem(`course_${courseId}_progress`)
    if (savedProgress) {
      setCompletedVideos(new Set(JSON.parse(savedProgress)))
    }

    // Mock course data
    const courses: Course[] = [
      {
        id: 1,
        title: 'AI活用基礎講座',
        description: 'ChatGPTを使った業務効率化の基本',
        videos: [
          { id: 1, title: '第1回：AI活用の概要', duration: '15:30', completed: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 2, title: '第2回：ChatGPTの基本操作', duration: '18:45', completed: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 3, title: '第3回：プロンプトエンジニアリング', duration: '22:15', completed: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 4, title: '第4回：業務への応用例', duration: '20:30', completed: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        ]
      },
      {
        id: 2,
        title: '第二の自分構築法',
        description: 'AIを自分の分身として育てる独自手法',
        videos: [
          { id: 1, title: '第1回：第二の自分とは', duration: '12:45', completed: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 2, title: '第2回：キャラクター設計', duration: '16:20', completed: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 3, title: '第3回：学習データの作成', duration: '19:35', completed: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 4, title: '第4回：実践的な活用方法', duration: '21:10', completed: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        ]
      },
      {
        id: 3,
        title: '3Dモデリング入門',
        description: 'Blenderを使った3Dモデリングの基礎',
        videos: [
          { id: 1, title: '第1回：Blenderの基本操作', duration: '25:15', completed: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 2, title: '第2回：メッシュモデリング', duration: '28:30', completed: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 3, title: '第3回：マテリアルとテクスチャ', duration: '24:45', completed: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 4, title: '第4回：ライティングとレンダリング', duration: '26:20', completed: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        ]
      }
    ]

    const foundCourse = courses.find(c => c.id === courseId)
    if (foundCourse) {
      setCourse(foundCourse)
      setCurrentVideo(foundCourse.videos[0])
    }
  }, [id, router])

  const markVideoComplete = (videoId: number) => {
    const newCompleted = new Set(completedVideos)
    newCompleted.add(videoId)
    setCompletedVideos(newCompleted)
    
    if (course) {
      localStorage.setItem(`course_${course.id}_progress`, JSON.stringify(Array.from(newCompleted)))
    }
  }

  const getProgressPercentage = () => {
    if (!course) return 0
    return Math.round((completedVideos.size / course.videos.length) * 100)
  }

  if (!isAuthenticated || !course) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">読み込み中...</p>
      </div>
    </div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={() => router.push('/courses')}
                className="text-blue-600 hover:text-blue-800 mb-2 flex items-center"
              >
                ← 講座一覧に戻る
              </button>
              <h1 className="text-2xl font-bold text-gray-800">{course.title}</h1>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">進捗</div>
              <div className="text-xl font-bold text-blue-600">{getProgressPercentage()}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-black">
                {currentVideo && (
                  <iframe
                    src={currentVideo.videoUrl}
                    title={currentVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {currentVideo?.title}
                </h2>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{currentVideo?.duration}</span>
                  <button
                    onClick={() => currentVideo && markVideoComplete(currentVideo.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      completedVideos.has(currentVideo?.id || 0)
                        ? 'bg-green-600 text-white'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {completedVideos.has(currentVideo?.id || 0) ? '完了済み' : '完了にする'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video List */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">動画一覧</h3>
            <div className="space-y-3">
              {course.videos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setCurrentVideo(video)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    currentVideo?.id === video.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{video.title}</h4>
                      <p className="text-sm text-gray-600">{video.duration}</p>
                    </div>
                    <div className="ml-3">
                      {completedVideos.has(video.id) ? (
                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Progress Bar */}
            <div className="mt-6 pt-4 border-t">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">コース進捗</span>
                <span className="text-sm font-medium text-blue-600">{getProgressPercentage()}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getProgressPercentage()}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}