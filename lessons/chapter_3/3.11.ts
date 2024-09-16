// // Упражнение - Типизируем функцию


// /* Запрос */
// {
//     "topicId": 5,
//     "status": "published" // "draft", "deleted"
// }
// /* Ответ */
// [
//     {
//         "question": "Как осуществляется доставка?",
//         "answer": "быстро!",
//         "tags": [
//             "popular",
//             "new"
//         ],
//         "likes": 3,
//         "status": "published"
//     }
// ]

enum QuestionStatus {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted'
}
async function getFaqs(req: {
    topicId: number,
    status?: QuestionStatus
}): Promise<{
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: QuestionStatus
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}
