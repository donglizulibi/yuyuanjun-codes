// 现在定义一个关于文章的类型约束, 这个类型约束中使用多个泛型

interface ArticleInterface<B, C> {
  title: string;
  isLocked: B;
  comments: C[];
}

// 再定义一个关于评论的类型约束
type CommentType = {
  author: string;
  comment: string;
};

const hd: ArticleInterface<boolean, CommentType> = {
  title: "hdcms",
  isLocked: true,
  comments: [
    { author: "houdunren", comment: "评论1" },
    { author: "abc", comment: "评论2" },
  ],
};

console.log(hd)
