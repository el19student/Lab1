import React from 'react';
import { News } from '../../../App/layout/models/news';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import NewsDetails from './Details/NewsDetails';


interface Props {
    newss: News[];
    selectNews: (newsId: number) => void;
}

export default function NewsList({ newss, selectNews }: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {newss.map(news => (
                    <Item key={news.newsId}>
                        <Item.Content>
                            <Item.Header as='a'>{news.newsHeadline}</Item.Header>
                            <Item.Meta>{news.newsUploadTime}</Item.Meta>
                            <Item.Description>
                                <div>{news.newsDescription}</div>
                                <div>{news.newsImage}</div>

                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectNews(news.newsId)} floated='right' content='view' color='blue' />
                                <Label basic content={news.newsHeadline} />
                            </Item.Extra>


                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )


}