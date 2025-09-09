import { Button } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

const StudentPage = () => {
    return (
        <div style={{ marginTop: 100, textAlign: "center"}}>

            <h1>Student Page</h1>
            {/* call button */}
            <Button>Primary</Button>
            <Button type="primary">Primary</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="link">Download</Button>

            {/* call icons */}
            <Button>
                <SaveOutlined/>
            </Button>
            <Button icon={<SaveOutlined/>}>Save</Button>
        </div>

    )

}


export default StudentPage;    