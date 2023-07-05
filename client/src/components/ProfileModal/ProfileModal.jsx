import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
      <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened = {modalOpened}
      onClose={() => setModalOpened(false)}
      >
        <form action="" className="infoForm">
            <h3>Your info</h3>
            <div>
                <input type="text" className="infoInput" name='firstName' placeholder='First name' />
                <input type="text" className="infoInput" name='lastName' placeholder='Last name' />
            </div>
            <div>
                <input type="text" className="infoInput" name='worksAt' placeholder='Works at...' />
            </div>
            <div>
                <input type="text" className="infoInput" name='livesIn' placeholder='Lives in...' />
                <input type="text" className="infoInput" name='country' placeholder='Country' />
            </div>
            <div>
                <input type="text" className="infoInput" name='status' placeholder='Relationship status' />
            </div>
            <div style={{justifyContent:'space-between'}}>
                
                <input type="file" name="profileImg" id="profileImg" style={{display:'none'}} />
                <label htmlFor="profileImg" style={{cursor:'pointer'}}>Upload profile image</label>
                <input type="file" name="coverImg" id="coverImg" style={{display:'none'}} />
                <label htmlFor="coverImg" style={{cursor:'pointer'}}>Upload cover image</label>
            </div>
            <button className="info-button button">Update</button>
        </form>
      </Modal>
  );
}

export default ProfileModal