import React, {Component} from 'react';
import { Table, Divider, Tag ,Switch ,Select } from 'antd';
import PageContent from '../../layouts/page-content'
import { Form, Row, Col, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

export const PAGE_ROUTE = '/example/users';
@Form.create()
export default class UserList extends Component {
    
    state = {
        expand: false,
        pageSize:3,
    };
    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          console.log('Received values of form: ', values);
        });
      }
    
    handleReset = () => {
    this.props.form.resetFields();
    }
    
    toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
    }
    onChange = (checked) => {
    console.log(`switch to ${checked}`);
    }
      
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
      

    render() {
        const columns = [{
            title: '规则ID',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>,
          }, {
            title: '产品线',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: '规则名称',
            dataIndex: 'address',
            key: 'address',
          }, {
            title: '执行类型',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
              <span>
                实时
              </span>
            ),
          },{
            title: '规则描述',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
              <span>
                微信商户平台的商户id和密钥，需要通过企业已认证的订阅号、服务号进行微信认
              </span>
            ),
          },{
            title: '控制点',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
              <span>
                交易
              </span>
            ),
          }, {
            title: '风险类型',
            key: 'action',
            render: (text, record) => (
              <span>
                套现
              </span>
            ),
          },{
            title: '处罚方式',
            key: 'action',
            render: (text, record) => (
              <span>
                
              </span>
            ),
          },{
            title: '创建人',
            key: 'action',
            render: (text, record) => (
              <span>
                胡忠涛
              </span>
            ),
          },{
            title: '操作类型',
            key: 'action',
            render: (text, record) => (
              <span>
                拒绝
              </span>
            ),
          },{
            title: '是否开启处罚',
            key: 'action',
            render: (text, record) => (
              <span>
                未处罚
              </span>
            ),
          },{
            title: '创建时间',
            key: 'action',
            render: (text, record) => (
              <span>
                2018-07-23 15:36:29
              </span>
            ),
          },{
            title: '状态',
            key: 'action',
            render: (text, record) => (
              <span>
                未启用
              </span>
            ),
          },
          {
            title: '备注',
            key: 'action',
            render: (text, record) => (
              <span>
                3
              </span>
            ),
          },
          {
            title: '备注',
            key: 'action',
            render: (text, record) => (
              <span>
                <a href="javascript:;">详情</a>
                <Divider type="vertical" />
                <a href="javascript:;">修改</a>
                <Divider type="vertical" />
                <Switch defaultChecked onChange={this.onChange} />
                <Divider type="vertical" />
                <a href="javascript:;">元素流程图</a>
                <Divider type="vertical" />
              </span>
            ),
          }];
          
          const data = [{
            key: '1',
            name: 'John Brown',
            age: '创新POS',
            address: '反洗钱规定2',
            tags: ['nice', 'developer'],
          }, {
            key: '2',
            name: 'Jim Green',
            age: '互联网商户',
            address: '交易风险事件非实时',
            tags: ['loser'],
          }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },{
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },{
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        }
        
        ];
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        return (
            <PageContent>
                <div style={{ background: '#ECECEC', padding: '30px' ,paddingBottom:'60px'}}>
                    <Form layout="inline" onSubmit={this.handleSubmit} >
                    <Row>
                        <Col span={6}>
                        <div style={{float:"right"}}>
                            <FormItem label="产品线">
                            <div>
                                <Select defaultValue="lucy" style={{ width: 150 }} onChange={this.handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">全部</Option>
                                <Option value="disabled" disabled>Disabled</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                            </FormItem>
                          </div>
                            
                        </Col>
                        <Col span={6}>
                            <div style={{float:"right"}}>
                            <FormItem label="控制点">
                            <div>
                                <Select defaultValue="lucy" style={{ width: 150 }} onChange={this.handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">全部</Option>
                                <Option value="disabled" disabled>Disabled</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                            </FormItem>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div style={{float:"right"}}>
                            <FormItem label="风险类型">
                            <div>
                                <Select defaultValue="lucy" style={{ width: 150 }} onChange={this.handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">全部</Option>
                                <Option value="disabled" disabled>Disabled</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                            </FormItem>
                            </div>
                        </Col>
                        <Col span={6}>
                          <div style={{float:"right"}}>
                            <FormItem label="状态">
                            <div>
                                <Select defaultValue="lucy" style={{ width: 150 }} onChange={this.handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">全部</Option>
                                <Option value="disabled" disabled>Disabled</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                            </FormItem>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"20px"}}>
                        
                        <Col span={6}>
                           <div style={{float:"right"}}>
                            <FormItem label="规则ID">
                              <Input placeholder="请输入"  style={{ width: 150 }}/>
                            </FormItem>
                           </div>
                        </Col>
                        <Col span={6}>
                            <div style={{float:"right"}}>
                              <FormItem label="规则名称">
                              <Input placeholder="请输入"  style={{ width: 150 }}/>
                              </FormItem>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div style={{float:"right"}}>
                              <FormItem label="是否开启处罚">
                              <div>
                                  <Select defaultValue="lucy" style={{ width: 150 }} onChange={this.handleChange}>
                                  <Option value="jack">Jack</Option>
                                  <Option value="lucy">全部</Option>
                                  <Option value="disabled" disabled>Disabled</Option>
                                  <Option value="Yiminghe">yiminghe</Option>
                                  </Select>
                              </div>
                              </FormItem>
                            </div>
                        </Col>
                        <Col span={6}>
                            
                            <div style={{float:"right"}}>
                            <FormItem label="操作状态">
                                <Select defaultValue="lucy" style={{ width: 150 }} onChange={this.handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">全部</Option>
                                <Option value="disabled" disabled>Disabled</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                                </FormItem>
                            </div>
                            
                        </Col>
                    </Row>
                    </Form>
                    <Button type="primary" style={{float:"right",marginTop:"20px",width:"100px"}}>查询</Button>
                </div>
                <Button type="primary" ghost style={{marginTop:'20px',width:"100px"}}>添加</Button>
                <Table style={{marginTop:"20px"}} columns={columns} dataSource={data} pagination={{defaultPageSize:this.state.pageSize}}/>
            </PageContent>
        );
    }
}
