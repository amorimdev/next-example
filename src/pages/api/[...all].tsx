import { NextApiRequest, NextApiResponse } from 'next';
import { get } from 'lodash';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const host = get(req, 'headers.host');
  const referer = get(req, 'headers.referer');
  const url = referer
    .replace(host, '')
    .replace('http://', '')
    .replace('https://', '');

  res.status(200).json({
    components: [
      {
        name: 'Home',
        props: {
          url,
        },
        childrens: [
          {
            name: 'Counter',
            props: {
              counter: 0,
            },
            childrens: [
              {
                name: 'Button',
                props: {
                  text: 'Sub',
                  functions: [
                    {
                      name: 'onClick',
                      bind: 'subCounter',
                    },
                  ],
                },
              },
              {
                name: 'Button',
                props: {
                  text: 'Add',
                  functions: [
                    {
                      name: 'onClick',
                      bind: 'addCounter',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  });
};
