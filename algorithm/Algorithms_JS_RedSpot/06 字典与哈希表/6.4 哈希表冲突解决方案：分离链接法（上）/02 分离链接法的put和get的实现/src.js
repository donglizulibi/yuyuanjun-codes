// 首先是链表的类

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    append(element) {
        let node = new Node(element)
        if (this.length == 0) {
            this.head = node
        } else if (this.length == 1) {
            this.head.next = node
        } else {
            let current = this.head
            for (let i = 0; i < this.length; i++) {
                current = current.next
                if (current.next == null) {
                    current.next = node
                    break
                }
            }
        }
        this.length++
    }
    insert(position, element) {
        let node = new Node(element)
        if (position < this.length) {
            if (position == 0) {
                node.next = this.head
                this.head = node
                this.length++
            } else if (position > 0) {
                let current = this.head
                for (let i = 0; i < position - 1; i++) {
                    current = current.next
                    break
                }
                let mid = current.next
                current.next = node
                node.next = mid
                this.length++
            } else {
                throw new Error('插入位置需要大于零')
            }
        } else {
            throw new Error('插入位置超出链表长度')
        }
    }
    indexOf(element) {
        if (this.length == 0) {
            throw new Error('链表中没有节点')
        } else {
            let count = 0;
            let current = this.head;
            if (current.element == element) {
                return 0
            }
            while (current.next) {
                current = current.next
                count++
                if (current.element == element) {
                    return count
                }
            }
            return '找不到该节点'
        }
    }

    removeAt(position) {
        if (this.length == 0) {
            throw new Error('链表中没有节点')
        } else {
            if (position < this.length) {
                let current = this.head
                if (position == 0) {
                    this.head = current.next
                    this.length--;
                    return current
                } else if (position > 0) {
                    let count = 0
                    while (current.next) {
                        let mid = current
                        current = current.next
                        count++
                        if (count == position) {
                            mid.next = current.next
                            this.length--;
                            return current
                        }
                    }
                } else {
                    throw new Error('输入的位置需要大于零')
                }
            } else {
                throw new Error('删除的位置超出链表长度')
            }
        }
    }

    remove(element) {
        return this.removeAt(this.indexOf(element))
    }
}

class Obj {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}