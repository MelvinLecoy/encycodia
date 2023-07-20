import { CodeRows } from "@/typings";

export const DScontainers = ["Array", "HashMap", "Deque", "Priority Queue", "String"];

export const DSconclusions = {
    "HashMap": {
        "Indexing (if DNE)": ["Only Java has no hm[key]", "Only C++ will add ele. if DNE", "Only Scala use hm(key)"],
        "Addition": ["Java, Rust, Scala & TS hm2 hv no SqBracket Addition"],
        "Deletion": ["Only Go & TS hm1 hv no clear()"],
        "Direct Printing": ["C++, Rust: error; C#: address"],
        "Check key exist": ["Only Go has no quick func."],
    },
} as CodeRows;

const navbarMapping = {
    'Array': '/DataStructures/Array/8cc3fa2e-b741-4b1c-b3d0-bc3ef8310283',
    'HashMap': '/DataStructures/HashMap/1f15bfe4-dbbf-4c88-a58e-b99ff27e98b4',
    'Deque': '/DataStructures/Deque/457c061b-99bf-475d-a613-9676979e795e',
    'Priority Queue': '/DataStructures/PriorityQueue/ed875bf1-ef7b-4fcf-95a3-ce222c3491a3',
    // 'Linked List': '/DataStructures/LinkedList/43cea707-6593-43ec-8c1e-effd563e5a22',
    // 'Set': '/DataStructures/Set/f63a8666-2cf2-4c76-96e5-dea77e4c0f02',
    // 'Stack': '/DataStructures/Stack/ac8d8d3c-7946-440d-aea5-7ad154b63658',
    // 'Queue': '/DataStructures/Queue/b4a47eec-75bc-40d0-a157-9fb1e055f8ce',
    // 'String': '/DataStructures/String/',
};

const HashMapConclusion = () => (
    <div className="fnoshrink w185 t13 mt145">
        <ul className="list-disc ps-[5px]">
            <li>Only Java has no hm[key]</li>
            <li>Only C++ will add ele. if DNE</li>
            <li>Only Scala use hm(key)</li>
        </ul>
        <ul className="list-disc ps-[5px] mt46">
            <li>Java, Rust, Scala & TS hm2 hv no SqBracket Addition</li>
        </ul>
        <ul className="list-disc ps-[5px] mt28">
            <li>Only Go & TS hm1 hv no clear()</li>
        </ul>
        <ul className="list-disc ps-[5px] mt179">
            <li>C++, Rust: error; C#: addr.</li>
        </ul>
        <ul className="list-disc ps-[5px] mt30">
            <li>Only Go has no quick func.</li>
        </ul>
    </div>
);