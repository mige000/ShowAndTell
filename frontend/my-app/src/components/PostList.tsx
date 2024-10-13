import React, { Component } from "react";
import { GroupData, PostData } from "../interfaces";
import { Post } from "./Post";

type PostListProps = {

    groupList: Array<GroupData> | null;

}

type PostListState = {

}

export class PostList extends Component<PostListProps, PostListState> {

    constructor(props: PostListProps) {
        super(props);
        this.state = {};
    }

    render = (): JSX.Element => {
        const postListHTML: JSX.Element[] = [];

        if (this.props.groupList == null) {
            postListHTML.push(
                <div>NO GROUPS!</div>
            );
            return (<div>{postListHTML}</div>);
        }

        for (const group of this.props.groupList) {
            if (group.posts != null) {
                for (const post of group.posts) {
                    postListHTML.push(
                        <Post postData={post}/>
                    );
                }
            };
                
        }

        return (<div>{postListHTML}</div>)
    }
}